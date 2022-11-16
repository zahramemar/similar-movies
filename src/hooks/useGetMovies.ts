import { getPage, MovieResponseType } from "../api/content";
import { useQuery } from "@tanstack/react-query";

type ArrElement<ArrType> = ArrType extends readonly (infer ElementType)[]
  ? ElementType
  : never;

type ProductsType = MovieResponseType["blocks"][number]["products"];
export type Product = ArrElement<ProductsType>;

export type Movie = {
  id: string;
  imageSrc: string;
  title: string;
  duration: string;
  year: number;
  data: Product;
};

const processData = (data: MovieResponseType): Movie[] => {
  const { /*templates, */ products } = data.blocks[0];
  const imageTemplate =
    "https://api.lorem.space/image/movie?w=240&h=320&title={title}"; // This was ugly, so I replaced it: templates.find(t => t.type === 'image')!.href;

  const fromProduct = (prod: Product): Movie => ({
    id: prod.guid,
    imageSrc: imageTemplate.replace("{title}", encodeURIComponent(prod.title)),
    year: prod.production.year,
    title: prod.title,
    duration: prod.duration.readable,
    data: prod,
  });

  return products.map(fromProduct);
};

export const useGetMovies = () => {
  const query = useQuery({ queryKey: ["movies"], queryFn: getPage });

  return { ...query, data: query.data && processData(query.data) };
};
