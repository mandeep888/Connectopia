// import { makeStyles } from '@material-ui/core/styles';

// export default makeStyles((theme) => ({
//   media: {
//     borderRadius: '20px',
//     objectFit: 'cover',
//     width: '100%',
//     maxHeight: '600px',

//   },
//   card: {
//     display: 'flex',
//     width: '100%',
//     [theme.breakpoints.down('sm')]: {
//       flexWrap: 'wrap',
//       flexDirection: 'column',
//     },
//   },
//   section: {
//     borderRadius: '20px',
//     margin: '10px',
//     flex: 1,
//   },
//   imageSection: {
//     marginLeft: '20px',
//     [theme.breakpoints.down('sm')]: {
//       marginLeft: 0,
//     },
//     display:"flex",
//     justifyContent:"end",
//   },
//   recommendedPosts: {
//     display: 'flex',
//     [theme.breakpoints.down('sm')]: {
//       flexDirection: 'column',
//     },
//   },
//   loadingPaper: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '20px',
//     borderRadius: '15px',
//     height: '39vh',
//   },
//   commentsOuterContainer: {
//     display: 'flex',
//     justifyContent: 'space-between',
//   },
//   commentsInnerContainer: {
//     height: '200px',
//     overflowY: 'auto',
//     marginRight: '30px',
//   },
//   recommendedPostImage: {
//     width: '50%',
//     height: '250px', // Fixed height for the recommended post images
//     objectFit: 'cover',
//     borderRadius: '10px',
//   }
// }));

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',
  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  imageSection: {
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
    display: "flex",
    justifyContent: "end",
  },
  recommendedPosts: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    flexDirection: 'row', // Default to row direction
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column', // Switch to column on smaller screens
    },
  },
  recommendedPost: {
    width: '30%',
    [theme.breakpoints.down('sm')]: {
      width: '100%', // Full width on smaller screens
    },
  },
  recommendedPostImage: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '10px',
    [theme.breakpoints.down('sm')]: {
      width: '100%', // Full width on smaller screens
      height: 'auto', // Auto height to maintain aspect ratio
    },
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '39vh',
  },
  commentsOuterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  commentsInnerContainer: {
    height: '200px',
    overflowY: 'auto',
    marginRight: '30px',
  },
}));
