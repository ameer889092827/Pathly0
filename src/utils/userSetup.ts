
// Simple user setup for demo purposes
export const setupDemoUser = () => {
  if (typeof window !== 'undefined') {
    const existingUser = localStorage.getItem("userName");
    if (!existingUser) {
      // Set a demo user for testing
      localStorage.setItem("userName", "Alex");
      
      // Add some demo progress
      const demoProgress = {
        "computer-science": 25,
        "business-administration": 15
      };
      localStorage.setItem("majorProgress", JSON.stringify(demoProgress));
      
      // Add demo activities
      const demoActivities = [
        {
          id: "1",
          action: { en: "Started Computer Science roadmap", ru: "Начал дорожную карту Computer Science" },
          time: new Date().toLocaleString(),
          type: "roadmap"
        },
        {
          id: "2", 
          action: { en: "Completed Python basics task", ru: "Завершил задачу основ Python" },
          time: new Date().toLocaleString(),
          type: "roadmap"
        }
      ];
      localStorage.setItem("userActivities", JSON.stringify(demoActivities));
    }
  }
};

export const getUserName = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem("userName");
  }
  return null;
};

export const setUserName = (name: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem("userName", name);
  }
};
