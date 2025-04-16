/**
 * Interface for email data
 */
interface EmailData {
  to: string;
  subject: string;
  message: string;
  name: string;
  email: string;
}

/**
 * Sends an email using the server's API
 * @param data Email data including recipient, subject, and message
 * @returns Promise resolving when email is sent
 */
export async function sendEmail(data: EmailData): Promise<void> {
  // In a real implementation, this would call an API endpoint
  // For now, we'll simulate a successful email send
  
  console.log("Sending email with data:", data);
  
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.1; // 90% success rate
      
      if (success) {
        console.log("Email sent successfully!");
        resolve();
      } else {
        console.error("Error sending email");
        reject(new Error("Failed to send email due to server error"));
      }
    }, 1500); // Simulate network delay
  });
}

/**
 * Validates email format
 * @param email Email address to validate
 * @returns Boolean indicating if email format is valid
 */
export function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
