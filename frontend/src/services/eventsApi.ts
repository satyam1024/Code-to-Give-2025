import { Event } from "@/data/events";

/**
 * Fetches all events from the API
 * @returns Promise with events data array
 */

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

// export const fetchEvents = async (): Promise<Event[]> => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/event`);

//     if (!response.ok) {
//       throw new Error(`Failed to fetch events data: ${response.statusText}`);
//     }

//     console.log(response.json());
//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching events:", error);
//     throw error;
//   }
// };
export const fetchEvents = async () => {
  const response = await fetch("http://localhost:3000/api/event");

  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }

  const data = await response.json();
  console.log(data);
  return data;
};

// const response = await fetch(`http://localhost:3000/api/event/${eventId}`);

export const fetchEventById = async (eventId: string): Promise<Event> => {
  const response = await fetch(`http://localhost:3000/api/event/${eventId}`);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to fetch event");
  }

  return response.json();
};

export const registerForEvent = async (eventId: string): Promise<Event> => {
  const response = await fetch(`http://localhost:3000/api/event/${eventId}`);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to fetch event");
  }

  return response.json();
};

/**
 * Fetches a single event by ID
 * @param eventId - The ID of the event to fetch
 * @returns Promise with event data
 */
// export const fetchEventById = async (eventId: string): Promise<Event> => {
//   try {
//     // INTEGRATION POINT: Replace with actual API call when backend is ready
//     // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events/${eventId}`);
//     //
//     // if (!response.ok) {
//     //   throw new Error(`Failed to fetch event data: ${response.statusText}`);
//     // }
//     //
//     // return await response.json();

//     // For development, filter from local data
//     const { events } = await import("@/data/events");
//     const event = events.find((e) => e.id === eventId);

//     if (!event) {
//       throw new Error(`Event with ID ${eventId} not found`);
//     }

//     return event;
//   } catch (error) {
//     console.error(`Error fetching event ${eventId}:`, error);
//     throw error;
//   }
// };

// /**
//  * Updates an event's details
//  * @param eventId - The ID of the event to update
//  * @param eventData - Updated event data
//  * @returns Promise with updated event data
//  */
// export const updateEvent = async (
//   eventId: string,
//   eventData: Partial<Event>
// ): Promise<Event> => {
//   try {
//     // INTEGRATION POINT: Replace with actual API call when backend is ready
//     // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events/${eventId}`, {
//     //   method: 'PUT',
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //   },
//     //   body: JSON.stringify(eventData),
//     // });
//     //
//     // if (!response.ok) {
//     //   throw new Error(`Failed to update event data: ${response.statusText}`);
//     // }
//     //
//     // return await response.json();

//     // For development, this would actually need a state management solution
//     // to persist changes. Just return the updated data for now.
//     const { events } = await import("@/data/events");
//     const event = events.find((e) => e.id === eventId);

//     if (!event) {
//       throw new Error(`Event with ID ${eventId} not found`);
//     }

//     // In a real implementation, this would update the stored data
//     return { ...event, ...eventData };
//   } catch (error) {
//     console.error(`Error updating event ${eventId}:`, error);
//     throw error;
//   }
// };

// /**
//  * Registers a user for an event
//  * @param eventId - The ID of the event
//  * @param userId - The ID of the user
//  * @returns Promise with registration confirmation
//  */
// export const registerForEvent = async (
//   eventId: string,
//   userId: string
// ): Promise<{ success: boolean; message: string }> => {
//   try {
//     // INTEGRATION POINT: Replace with actual API call when backend is ready
//     // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events/${eventId}/register`, {
//     //   method: 'POST',
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //   },
//     //   body: JSON.stringify({ userId }),
//     // });
//     //
//     // if (!response.ok) {
//     //   throw new Error(`Failed to register for event: ${response.statusText}`);
//     // }
//     //
//     // return await response.json();

//     // For development, simulate a successful registration
//     return {
//       success: true,
//       message: `Successfully registered for event ${eventId}`,
//     };
//   } catch (error) {
//     console.error(`Error registering for event ${eventId}:`, error);
//     throw error;
//   }
// };
