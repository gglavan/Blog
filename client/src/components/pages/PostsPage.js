import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Grid,
  Container,
  Dimmer,
  Loader,
  Message,
  Input
} from "semantic-ui-react";
import PropTypes from "prop-types";
import { css } from "react-emotion";
import Post from "../commons/Post";
import Newsletter from "../commons/Newsletter";
import PopularPosts from "../commons/PopularPosts";
import Footer from "../commons/Footer";
import { postsFetchData } from "../../actions/postActions";
import preload from "../../data/data.json";

const searchBar = css`
  margin-top: 50px;
`;

class PostsPage extends Component {
  componentDidMount() {
    this.props.fetchData("/api/posts");
  }

  state = {
    currentValue: "",
    searchTerm: "",
    isLoading: false,
    typingTimeOut: 0
  };

  handleSearchTermChange = event => {
    const term = event.target.value;
    this.setState({ currentValue: term });
    this.setState({ isLoading: true });
    clearTimeout(this.state.typingTimeout);
    this.state.typingTimeout = setTimeout(() => {
      this.setState({ searchTerm: term });
      this.setState({ isLoading: false });
    }, 500);
  };

  render() {
    if (this.props.hasErrored) {
      return (
        <Message negative>
          <Message.Header>
            Sorry! There was an error loading the posts
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
                <Input
                  onChange={this.handleSearchTermChange}
                  value={this.state.currentValue}
                  size="big"
                  className={searchBar}
                  fluid
                  loading={this.state.isLoading}
                  icon="search"
                  placeholder="Search for posts..."
                />
                {this.props.isLoading ? (
                  <Dimmer active inverted>
                    <Loader>Loading...</Loader>
                  </Dimmer>
                ) : (
                  this.props.posts
                    .filter(
                      post =>
                        `${post.title} ${post.content}`
                          .toUpperCase()
                          .indexOf(this.state.searchTerm.toUpperCase()) >= 0
                    )
                    .map(post => <Post {...post} key={post._id} />)
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
  posts: state.posts,
  hasErrored: state.postsHasErrored,
  isLoading: state.postsIsLoading
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(postsFetchData(url))
});

PostsPage.propTypes = {
  fetchData: PropTypes.func.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  posts: PropTypes.arrayOf({}).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
