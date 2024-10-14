import NglViewer from "../ui/viewer";
import { fetchProteinById } from "../lib/data";
import ProteinCard from "../ui/card";

export default async function Page() {
  // const [protein, setProtein] = useState(null);
  const protein = await fetchProteinById({proteinId:"670c98d5483fbe888f0ee59d"});
  // console.log(protein);
  return (
    <div>
    <div className="container mx-auto">
      <ProteinCard {...protein} />
    </div>
    <div>
      <NglViewer pdbUrl={protein?.File_Url} persp="cartoon" />
    </div>
    </div>
  );
}
