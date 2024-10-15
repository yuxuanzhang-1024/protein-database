import Pagination from "../ui/pagination";
import NglViewer from "../ui/viewer";
import { fetchNumProteinPages, fetchProteinById, fetchProteins } from "../lib/data";
// import ProteinCard from "../ui/card";
import ProteinGallery from "../ui/board";
import { Suspense } from "react";
import Search from "../ui/search";
export default async function Page({searchParams}: 
  {searchParams?: 
    {
      query?: string;
      page?: number;
    };
  }){
  // const [protein, setProtein] = useState(null);
  const query = searchParams?.query || "";
  const Proteins = await fetchProteins(query);
  const currentPage = searchParams?.page || 1;
  // const proteinsPerPage = generateProtiensPerPage();
  // console.log(typeof generateProtiensPerPage);
  // const totalPages = await fetchNumProteinPages(query, proteinsPerPage);
  // console.log(protein);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8">
    <div className="flex justify-center">
      <Search placeholder="Search for proteins..." />
    </div>
    <Suspense key = {currentPage}>
      <ProteinGallery Proteins={Proteins} currentPage={currentPage} />
    {/* <div>
      <NglViewer pdbUrl={protein?.File_Url} persp="cartoon" />
    </div> */}
    </Suspense>
    <div className="mt-5 flex justify-center">
      <Pagination Proteins={Proteins}/>
    </div>
    </div>
  );
}
