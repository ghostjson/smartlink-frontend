export const createWhatsappMessage = (
  name: string,
  gender: string,
  email: string,
  phone: string,
  date: string,
  rewardCode: string,
  expiry: string
) => {
  console.log(date);
  return encodeURIComponent(`Thank You
We have received your response to the ABC survey. Please find below your information & reward link.
  
 Name: ${name} 
 Gender: ${gender} 
 Email : ${email} 
 Phone : ${phone} 
 Date of Birth : ${date} 
 
 Reward Code
 ${rewardCode} 
 
You can redeem the reward during operational hours before ${expiry}. To redeem, present this message to the cashier.`);
};
