import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Container, Dimmer, Loader } from "semantic-ui-react";
import PropTypes from "prop-types";
import Post from "../commons/Post";
import Newsletter from "../commons/Newsletter";
import PopularPosts from "../commons/PopularPosts";
import Footer from "../commons/Footer";
import { postsFetchData } from "../../actions/postActions";
import preload from "../../data/data.json";

class PostsPage extends Component {
  componentDidMount() {
    this.props.fetchData("/api/posts");
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    return (
      <div>
        <Container>
          <Grid stackable columns={2}>
            <Grid.Row>
              <Grid.Column width={12}>
                {this.props.isLoading ? (
                  <Dimmer active inverted>
                    <Loader>Loading...</Loader>
                  </Dimmer>
                ) : (
                  this.props.posts.map(post => (
                    <Post {...post} key={post._id} />
                  ))
                )};
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

const mapStateToProps = state => ({
  posts: state.posts,
  hasErrored: state.postsHasErrored,
  isLoading: state.postsIsLoading
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(postsFetchData(url))
});

PostsPage.propTypes = {
  fetchData: PropTypes.func.isRequired,
  hasErrored: PropTypes.func.isRequired,
  isLoading: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf({}).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
