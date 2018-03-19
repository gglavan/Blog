import React from "react";
import { Container, Grid } from "semantic-ui-react";
import Newsletter from "../commons/Newsletter";
import PopularPosts from "../commons/PopularPosts";
import Footer from "../commons/Footer";
import NewPostForm from "../commons/NewPostForm";
import preload from "../../data/data.json";

const PostAddPage = () => (
  <div>
    <Container>
      <Grid stackable columns={2}>
        <Grid.Row>
          <Grid.Column width={12}>
            <NewPostForm />
          </Grid.Column>
          <Grid.Column width={4}>
            <Newsletter />
            <PopularPosts popular={preload.popular} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
    <Footer />
  </div>
);

export default PostAddPage;
