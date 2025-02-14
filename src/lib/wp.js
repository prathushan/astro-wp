import axios from 'axios';

export async function getHomePage() {
  try {
    const res = await axios.get('https://dev-fit-quest-challenge.pantheonsite.io/wp-json/wp/v2/pages?slug=home');
    if (res.data.length > 0) {
      return res.data[0]; // Get the first matching page (home)
    }
    return null;
  } catch (error) {
    console.error('Error fetching homepage:', error);
    return null;
  }
}
