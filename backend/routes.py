import requests
import json

API_KEY = "GoogleApiKey"

# data = json.load("example.json")
locations = []
origins = []
destinations = []


def get_locations():
    locations = data["locations"]
    return locations


def get_distance_matrix(origins, destinations):
    url = f"https://maps.googleapis.com/maps/api/distancematrix/json?origins={','.join(origins)}&destinations={','.join(destinations)}&key={API_KEY}"
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        raise Exception(f"Error fetching distance matrix: {response.status_code}")


# distance_matrix = get_distance_matrix(origins, destinations)


def calculate_distances(locations: list) -> dict:
    """
    Fetches all pairwise distances using Google Maps Distance Matrix API (batched).

    Args:
        locations: List of location names.

    Returns:
        Dictionary with distances between all origin-destination pairs.
    """
    batch_size = 5
    distances = {}
    graph = {location: {} for location in locations}

    for i in range(0, len(locations), batch_size):
        origin_group = locations[i : i + batch_size]
        destinations = locations.copy()
        destinations.remove(origin_group[0])

        api_response = calculate_distances_with_api(origin_group, destinations)
        update_distances_and_graph(api_response)

    return distances, graph


# distances, graph = calculate_distances(locations)

import requests
import json


def calculate_distances_with_api(origins: list, destinations: list) -> list:
    """
    Fetches distances using Google Maps Distance Matrix API (batched).

    Args:
        origins: List of origin addresses (strings).
        destinations: List of destination addresses (strings).

    Returns:
        List of individual distance matrix response dictionaries.
    """
    url = f"https://maps.googleapis.com/maps/api/distancematrix/json?origins={','.join(origins)}&destinations={','.join(destinations)}&key={API_KEY}"
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()["rows"]
    else:
        raise Exception(f"Error fetching distances: {response.status_code}")


def update_distances_and_graph(distances_dict: dict, graph: list):
    """
    Updates distances dictionary and graph based on multiple distance matrix responses.

    Args:
        distances_dict: Dictionary to store all calculated distances.
        graph: Adjacency list representation of the graph with distances.
    """
    for response in distances_dict:
        origin_index = locations.index(response["elements"][0]["origin_addresses"][0])
        for element in response["elements"]:
            if element["status"] == "OK":
                destination = locations[
                    locations.index(element["destination_addresses"][0])
                ]
                distance_value = element["distance"]["value"]
                distances_dict[(locations[origin_index], destination)] = distance_value
                graph[locations[origin_index]][destination] = distance_value
            else:
                print(
                    f"Error getting distance for {locations[origin_index]} to {destination}"
                )


import sys


def dijkstra(graph: list, start: int) -> list:
    """
    Takes the coordinates of the places and finds the shortest path from the origin place to destination place.

    Args:
      graph: distance matrix representation of the graph with distances.
      start: Starting node (int).

    Returns:
      A list representing the traversal order of nodes for the shortest paths from the 'start' node to all reachable nodes.
      If no path exists to a particular node, its corresponding value in the list will be -1.
    """
    n = len(graph)
    visited = [False] * n
    distance = [sys.maxsize] * n
    path = [-1] * n

    distance[start] = 0

    for _ in range(n):
        min_distance = sys.maxsize

        for i in range(n):
            if not visited[i] and distance[i] < min_distance:
                min_distance = distance[i]
                u = i

        visited[u] = True

        for v in range(n):
            if (
                not visited[v]
                and graph[u][v] > 0
                and distance[u] + graph[u][v] < distance[v]
            ):
                distance[v] = distance[u] + graph[u][v]
                path[v] = u

    traversal_order = get_traversal_order(path, start)
    return traversal_order


def get_traversal_order(path: list, start: int) -> list:
    """
    Reconstructs the traversal order using the parent information stored in the path list.

    Args:
        path: A list of parent nodes for each node in the graph.
        path[i] represents the parent of node i, or -1 if it's the starting node.
        start: The starting node of the traversal.

    Returns:
        A list representing the order in which nodes were visited during the traversal,
        starting from the 'start' node and ending at the nearest node with a parent of -1.
    """
    order = []
    n = len(path)

    for i in range(n):
        if i != start:
            current_node = i
            while current_node != -1:
                order.insert(0, current_node)
                current_node = path[current_node]

    return order


# Example usage
if __name__ == "__main__":
    graph = [
        [0, 0, 5, 0, 6, 0],
        [3, 0, 0, 0, 14, 0],
        [0, 0, 0, 4, 0, 0],
        [0, 8, 0, 0, 0, 0],
        [12, 0, 6, 0, 0, 4],
        [2, 0, 9, 7, 0, 0],
    ]

    start_node = 0
    result = dijkstra(graph, start_node)
    print("Traversal Order:", result)
