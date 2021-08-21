{
  type PageInfo = {
    title: string;
  };
  type Page = "home" | "about" | "contact";

  type Record<K extends keyof any, T> = {
    [P in K]: T;
  };
  // K 에 있는 항목을 돌며 P 에 할당 : T 리턴

  // Page 에 있는 각각의 항목에 PageInfo type 을 결합
  const nav: Record<Page, PageInfo> = {
    home: { title: "Home" },
    about: { title: "About" },
    contact: { title: "Contact" },
  };

  type Product = "cat" | "dog";
  type NewProduct = Capitalize<Product>; // 'Cat' | 'Dog'
}
