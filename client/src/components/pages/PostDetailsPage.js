import React, { Component } from "react";
import { Container, Grid } from "semantic-ui-react";
import axios from "axios";
import PropTypes from "prop-types";
import PostFull from "../commons/PostFull";
import Newsletter from "../commons/Newsletter";
import PopularPosts from "../commons/PopularPosts";
import Footer from "../commons/Footer";
import preload from "../../data/data.json";

class PostDetailsPage extends Component {
  state = {
    post: []
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    axios
      .get(`/api/posts/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ post: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Container>
          <Grid stackable columns={2}>
            <Grid.Row>
              <Grid.Column width={12}>
                <PostFull {...this.state.post} />
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
  }
}

PostDetailsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default PostDetailsPage;
