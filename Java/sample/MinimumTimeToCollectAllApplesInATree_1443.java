package sample;

import java.util.*;

public class MinimumTimeToCollectAllApplesInATree_1443 {

    public static void main(String[] args) {
        int n = 4;
        int[][] edges = {{0,3}, {1,3}, {2,3}};
        List<Boolean> hasApple = Arrays.asList(false, true, false, false);
        int ans = minTime(n, edges, hasApple);

        System.out.println(ans);
    }


    static int dfs(int node, int parent, Map<Integer, List<Integer>> adj,
            List<Boolean> hasApple) {
        if (!adj.containsKey(node))
            return 0;

        int totalTime = 0, childTime = 0;
        for (int child : adj.get(node)) {
            if (child == parent)
                continue;
            childTime = dfs(child, node, adj, hasApple);
            // childTime > 0 indicates subtree of child has apples. Since the root node of the
            // subtree does not contribute to the time, even if it has an apple, we have to check it
            // independently.
            if (childTime > 0 || hasApple.get(child))
                totalTime += childTime + 2;
        }
        return totalTime;
    }

    static int minTime(int n, int[][] edges, List<Boolean> hasApple) {
        Map<Integer, List<Integer>> adj = new HashMap<>();

        for (int[] edge : edges) {
            int a = edge[0], b = edge[1];
            adj.computeIfAbsent(a, value -> new ArrayList<Integer>()).add(b);
            adj.computeIfAbsent(b, value -> new ArrayList<Integer>()).add(a);
            System.out.println(adj);

        }
        return dfs(0, -1, adj, hasApple);
	}

}
