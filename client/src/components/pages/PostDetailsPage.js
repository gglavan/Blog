import React, { Component } from "react";
import { Container, Grid, Dimmer, Loader, Message } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PostFull from "../commons/PostFull";
import Newsletter from "../commons/Newsletter";
import PopularPosts from "../commons/PopularPosts";
import Footer from "../commons/Footer";
import { postFetchData } from "../../actions/postActions";
import preload from "../../data/data.json";

class PostDetailsPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchData(`/api/posts/${this.props.match.params.id}`);
  }

  render() {
    if (this.props.hasErrored) {
      return (
        <Message negative>
          <Message.Header>
            Sorry! There was an error loading this post
          </Message.Header>
          <p>Please try again later.</p>
        </Message>
      );
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
                  <PostFull {...this.props.post} />
                )}
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
  post: state.post,
  hasErrored: state.postHasErrored,
  isLoading: state.postIsLoading
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(postFetchData(url))
});

PostDetailsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  fetchData: PropTypes.func.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  post: PropTypes.shape({}).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailsPage);
