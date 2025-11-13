import Section from "../Section/Section";
import Container from "../Container/Container";
import Form from "../Form/Form";
import { getPhotos } from "../../services/photos";
import type { Photo } from "../../types/photo";
import { useState } from "react";

export default function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);

  const searchQuery = async (onSubmit: string) => {
    const data = await getPhotos(onSubmit);
    setPhotos(data);
  };

  return (
    <>
      <Section>
        <Container>
          <Form onSubmit={searchQuery} />
        </Container>
      </Section>
    </>
  );
}
