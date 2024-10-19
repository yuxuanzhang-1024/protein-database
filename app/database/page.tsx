import App from './database';
import { fetchAllProteins } from '../lib/data';
export default async function Page() {
    const proteins = await fetchAllProteins();
  return (
    // <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8">
  <App proteins={proteins} />
//   </div>
  );
}
