import { FC } from "react";
import { Character } from "@/models";

import CardCharacter from "../basics/CardCharacter";

interface PageInfo {
  total: number;
  perPage: number;
  page: number;
  setPage: (page: number) => any;
}
interface ListProps {
  title: string;
  characters: Character[];
  pageInfo?: PageInfo;
}
const ListCharacters: FC<ListProps> = ({ title, characters, pageInfo }) => {
  const showPrevious = pageInfo && Number(pageInfo?.page > 1);
  const totalPages = pageInfo && Number(pageInfo?.perPage);
  const showNext = totalPages && totalPages > pageInfo?.page;

  const handleNextPage = () => {
    pageInfo?.setPage(pageInfo?.page + 1);
  };

  const handlePreviousPage = () => {
    pageInfo?.setPage(pageInfo?.page - 1);
  };

  return (
    <div className="">
      <div className="mx-auto max-w-2xl py-5 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h2>
        {pageInfo ? (
          <div className="flex flex-1 items-center justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Mostrando <span className="font-medium">{pageInfo.page}</span>{" "}
                {" / "}
                <span className="font-medium">{pageInfo.perPage}</span> de{" "}
                <span className="font-medium">{pageInfo.total}</span> resultados
                totales
              </p>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                {showPrevious ? (
                  <a
                    onClick={handlePreviousPage}
                    className="relative cursor-pointer inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                    <span className="hidden sm:block">Anterior</span>
                  </a>
                ) : null}
                {showNext ? (
                  <a
                    onClick={handleNextPage}
                    className="relative inline-flex cursor-pointer items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                  >
                    <span className="hidden sm:block">Siguiente</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </a>
                ) : null}
              </nav>
            </div>
          </div>
        ) : null}

        <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-10 sm:grid-cols-3 lg:grid-cols-5 ">
          {characters.map((character) => (
            <CardCharacter key={character.id} character={character} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListCharacters;
