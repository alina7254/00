import { Thread } from "../hooks/types";

export const calculateTotalThreads = (threads: Thread[]): number => {
    return threads.length;
  };

export const calculateBoardSpeed = (threads: Thread[]): number => {
  const oneHourAgo = Date.now() - 60 * 60 * 1000;
  return threads.reduce((count, thread) => {
    const recentPosts = thread.posts.filter(
      post => new Date(post.timestamp).getTime() > oneHourAgo
    );
    return count + recentPosts.length;
  }, 0);
};

export const calculateCurrentUsers = (threads: Thread[]): number => {
  const userIPs = new Set<string>();
  threads.forEach(thread => {
    thread.posts.forEach(post => {
      if (post.author) userIPs.add(post.author);
    });
  });
  return userIPs.size;
};

export const getPopularThreads = (threads: Thread[]) => {
    const filteredThreads = threads.filter((thread) => thread.posts.length > 0);
  
    const sortedThreads = filteredThreads.sort((a, b) => {
      const lastPostA = a.posts[a.posts.length - 1]?.timestamp;
      const lastPostB = b.posts[b.posts.length - 1]?.timestamp;
  
      const timeA = lastPostA ? new Date(lastPostA).getTime() : 0;
      const timeB = lastPostB ? new Date(lastPostB).getTime() : 0;
  
      return timeB - timeA;
    });
  
    const uniqueThreads = Array.from(
      new Map(sortedThreads.map((thread) => [thread.id, thread])).values()
    );
  
    return uniqueThreads.slice(0, 5);
  };
  
  
  
