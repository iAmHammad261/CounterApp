import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { MMKV } from 'react-native-mmkv';

// Create an instance of MMKV for storage
const storage = new MMKV();

const useCounter = create(
  persist(
    (set) => ({
      counterValue: 0, // Default value
      increaseCounterValue: () => {
        set((state) => ({ counterValue: state.counterValue + 1 }));
      },
      decreaseCounterValue: () => {
        set((state) => ({ counterValue: state.counterValue - 1 }));
      },
      resetCounterValue: () => {
        set((state) => ({ counterValue: 0 }));
      },
    }),
    {
      name: 'counter-storage',
      storage: {
        // Retrieve an item from storage
        async getItem(name) {
          console.log("Fetching item with key:", name);
          const value = storage.getString(name); // Use getString to get the stored value as a string
          console.log("Retrieved value:", value);
          if (value) {
            try {
              // Parse the stored value
              const parsed = JSON.parse(value);
              return parsed;
            } catch (error) {
              console.error("Error parsing JSON from storage:", error);
              return null; // Return null if parsing fails
            }
          }
          return null; // Return null if no value is found
        },
        // Save an item to storage
        async setItem(name, value) {
          console.log("Setting item with key:", name, "Value:", value);
          try {
            // Convert the value to a JSON string
            const jsonValue = JSON.stringify(value);
            storage.set(name, jsonValue); // Store the JSON string in MMKV
          } catch (error) {
            console.error("Error stringifying value for storage:", error);
          }
        },
        // Remove an item from storage
        async removeItem(name) {
          console.log("Removing item with key:", name);
          storage.delete(name);
        },
      },
    }
  )
);

export default useCounter;
