import { Link } from 'react-router-dom'
import styles from './Landing.module.css'
import Shelflogo from '../../assets/ShelfLogo.png'
import mockupRelocate from '../../assets/mockupRelocate.png'

import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'


const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
    {user ?
      <>
        <h4>Welcome, {user.name}</h4>
        <div>
          <h4 id='header'>To-do Lists</h4>
          <p id='view-to-do'>to-do list view placeholder</p>
          <Link
            to="/create-todolist"
          >
            <Button variant='contained' size="small">create to-do list</Button>
          </Link>
          <Link
            to="/todolists"
          >
            <Button variant='contained' size="small">view all to-do lists</Button>
          </Link>
        </div>

        <div>
          <h4>Wishlists</h4>
          <p>wishlistlist view placeholder</p>
            <Link to='/create-wishlist'>
              <Button variant='contained' size="small">create wishlist</Button>
            </Link>
            <Link to='/wishlists'><Button variant='contained' size="small">view all wishlists</Button></Link>
        </div>
      </>
    :
      <>
        <div id='welcome-statement'> 
          <img 
            className={styles.shelf}
            src={Shelflogo} alt="relocate-shelf-logo" />
          <h2 id="brand-statement"> Giving you peace of mind every step of the way. Worry Less. Enjoy More.</h2>
          <h2 className={styles.tag}>We make moving easier.</h2>
        </div>

        <div className={styles.choices}>
          <div className={styles.loginDiv}>
            <p>Already have an account?</p>
            <Button variant='contained' size="small"><Link to="/login">Log In</Link></Button>
          </div>

          <img 
            src={mockupRelocate} alt="mockup-of-app" 
            className={styles.phone}/>

          <div className={styles.signupDiv}>
            <p>New to Relocate?</p>
            <Button variant='contained' size="small"><Link to="/signup">Sign Up</Link></Button>
          </div>
        </div>

        <Box className={styles.about}>
          <Paper>
            <h3>About Relocate.</h3>
            <p>Relocate. is a hub for all things you need when you're moving. This app makes an overwhelming experience more seamless and less stressful.</p>
            <p>Instead of using multiple documents and spreadsheets, Relocate. gives you the power to have everything in one place - all you have to do is sign-up. We wanted to create an app to help ease the stress of moving which is a notoriously bad time.</p>
          </Paper>
        </Box>

        <Box className={styles.meetTheTeam}>
          <Paper elevation={2}>
            <h3>Meet the Team</h3>
            <p>Chaotic Good Co. is made up of a group of software developers including Steph Michael, Zeus Zaragoza-Gildo and Ryan Combest. We strive to make clean, functional products. </p>
          </Paper>
        </Box>

        <Box className={styles.features}> 
          <Paper>
            <h3>Features</h3>
            <p>Relocate. allows you to:</p>
            <div className='features-list'>
              <ul>
                <li>Track to-do lists for your apartment</li>
                <li>Create a wish list</li>
                <li>Upload a floor plan and add dimensions for each room</li>
              </ul>
            </div>
            <p>... and others.  </p>
          </Paper>
        </Box>

        <h2 className={styles.explore}>Explore Relocate.</h2>
      </>
    }
    </main>
  )
}

export default Landing
