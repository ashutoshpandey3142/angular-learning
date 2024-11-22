// Base class
class Payment {
    // Method to be overridden
    processPayment(amount: number): void {
      console.log(`Processing payment of $${amount}...`);
    }
  }
  
  // Subclass for CreditCard
  class CreditCardPayment extends Payment {
    // Overriding the processPayment method
    processPayment(amount: number): void {
      console.log(`Processing credit card payment of $${amount}...`);
    }
  }
  
  // Subclass for PayPal
  class PayPalPayment extends Payment {
    // Overriding the processPayment method
    processPayment(amount: number): void {
      console.log(`Processing PayPal payment of $${amount}...`);
    }
  }
  
  // Function demonstrating polymorphism
  function processPayment(payment: Payment, amount: number): void {
    payment.processPayment(amount);
  }
  
  // Creating instances of CreditCardPayment and PayPalPayment
  const creditCardPayment = new CreditCardPayment();
  const payPalPayment = new PayPalPayment();
  
  // Using polymorphism to call the correct processPayment method
  processPayment(creditCardPayment, 100); // Output: Processing credit card payment of $100...
  processPayment(payPalPayment, 200); // Output: Processing PayPal payment of $200...
  