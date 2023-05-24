interface ImageInterface {
  id: string;
  attributes: {
    name: string;
    img: {
      data: {
        id: string;
        attributes: {
          url: string;
          alternativeText: string | null;
        };
      };
    };
  };
}
