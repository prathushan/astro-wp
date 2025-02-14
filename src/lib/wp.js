import axios from 'axios';

export async function getPages() {
  try {
    const res = await axios.get('https://dev-fit-quest-challenge.pantheonsite.io/wp-json/wp/v2/pages');
    return res.data;
  } catch (error) {
    console.error('Error fetching pages:', error);
    return [];
  }
}
