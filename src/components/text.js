import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Movie from '@material-ui/icons/Movie';
import MusicVideo from '@material-ui/icons/MusicVideo';
import ImageIcon from '@material-ui/icons/Collections'
import TextIcon from '@material-ui/icons/Translate'

import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import InputLabel from '@material-ui/core/InputLabel';



import Select from '@material-ui/core/Select';
import Network from './network'
import WordCloud from './tagCloud'




//Import Components



import Bubbles from './bubbleChart'

const drawerWidth = 240;




const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 2px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class PersistentDrawerLeft extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;
  const icons = [<ImageIcon />,<Movie />,<MusicVideo />,<TextIcon />]
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" color="inherit" noWrap>
              Multimedia Explorer
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {['Images', 'Videos', 'Audio', 'Text'].map((text, index) => (
              <a  href="https://www.w3schools.com">
              <ListItem button key={text}>
              
                <ListItemIcon>{icons[index]}</ListItemIcon>
                <ListItemText primary={text} />
                
              </ListItem>
              </a>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{icons[index]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          
          <div className="select">
          <div className="textfield">
          <TextField
          id="outlined-search"
          label="Search "
          type="search"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          fullWidth
        />
        

          </div>
          <div className="formControl">
          <FormControl variant="outlined" margin="normal" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-age-native-simple"
          >
            Features
          </InputLabel>
          <Select
            native
            value="20"
            
            input={
              <OutlinedInput
                name="Features"
                labelWidth={this.state.labelWidth}
                id="outlined-age-native-simple"
              />
            }
          >
            <option value="" />
            <option value={10}>Manuscript</option>
            <option value={20}>Art</option>
            <option value={30}>Society</option>
          </Select>
        </FormControl>
          </div>
         
         

          </div>
        
          <div className="principal">
        
          <div className="bubbles">
          <h1 className="title">Corpus</h1>
          <Bubbles/>

          </div>
          <div className="graph">
          <h1 className="title">Named Entity Graph</h1>
          <Network/>

     </div>
     <div className="text">
     
     <div className="textRaw">
     <h1 className="title">Text View</h1>


     <p>

         During my time working street crimes, the prosecutor’s office called over and asked for a favor. They had reason to believe a middle-aged man living with a single mother of a two-year-old toddler might be abusing the child.

My partner and I dropped by the apartment early that evening for a welfare check. When we arrived, we were greeted by a man who was in his forties and was short and heavy set and wore wire-rimmed glasses. He kind of reminded me of the George Costanza character on the TV show Seinfeld. He had that innocent round face and was heavy set and acted kind of socially awkward. Is it possible that this little man could be a monster?

The woman he was living with was at work, and the man was watching her two-year-old little girl. We asked the man if the child was there with him, and he pointed over to a playpen. Now, without going into much detail, what we saw alarmed us and led us to believe that the child was being abused. Our observations were sufficient to take the man into custody and call the child’s mother.

The girl’s mother came home and transported the child to the emergency room for a thorough examination. I transported this child-like little man to a separate part of the hospital, and we were directed to an isolation room, which was completely separate from the rest of the emergency room. It was a small room with no windows and one steel door, which I kept closed.

I should tell you right off that I had two daughters at home who at that time were ages two and five, so this whole situation was hitting really close to home for me. I was not sure how I would react if the tests on the child came back positive.

My understanding was that the examination of the child was not entirely conclusive one way or the other, but there were indicators such as redness, which could easily be mistaken or explained as diaper rash.

At some point, a nurse would come to the room to complete a rape kit on the man to identify any possible physical trace evidence of a crime. Shortly after we arrived in the room, a nurse popped her head in and said they had incoming patients from a car crash, which took priority, so we should expect to be there awhile.

All kinds of things go through one’s mind when one is sitting alone in a room with a person who may have abused a child. I thought about the worst things that could happen to this person, like if he tried to escape? I also had pictures running through my mind of what this person might have done to this innocent young child, who was very much like my own children.

I completed a Miranda form but did not initially question him. We sat in that room together in silence for probably a half hour. He was seated on a hospital examination table with one hand handcuffed to a railing. I started to see that he was beginning to show signs of becoming upset as he stared at the floor.
     </p>

     </div>
     <div className="TagCloud">
     <h1 className="title">Word Cloud</h1>
     <WordCloud/>
     </div>
     

     </div>

         
         



          </div>
          
        </main>
      </div>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);