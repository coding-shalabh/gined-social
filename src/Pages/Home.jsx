import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Header from '../Components/Common/Header'
import ProfileCard from '../Components/Common/ProfileCard'
import WidgetArea from '../Components/Common/WidgetArea'
import ScrollTop from '../Components/Common/ScrollTop'
import postData from '../TemporaryData/postJson'
import coursesData from '../TemporaryData/coursesJson'
import subscriptionData from '../TemporaryData/subcriptionsJson'
import Post from '../Components/Common/Post'

function Home() {
  const [count, setCount] = useState(0)
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated) || !!localStorage.getItem('userId')
  const navigate = useNavigate()

  if (!isAuthenticated) {
    navigate('/login')
    return null
  }
  
  return (
    <>
        <Header />

<main>

    <div className="main-wrapper pt-80">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 order-2 order-lg-1">
                    <aside className="widget-area">
                        {/* widget single item start */}
                        <ProfileCard />
                        {/* widget single item end */}

                        {/* widget single item start */}
                        {/* <WidgetArea widgetTitle="Recent Notifications" listData={widgetData.recentNotifications} /> */}
                        {/* widget single item end */}
                    <WidgetArea widgetTitle="Subscribed Topics" listData={subscriptionData} />

   
                    </aside>
                </div> {/* Added missing closing div tag */}
                <div className="col-lg-6 order-1 order-lg-2">
                    {/* <ShareBox />   */}
                    {postData.map((post, index) => (
                        <Post key={index} post={post} />
                    ))}
                </div>

                <div className="col-lg-3 order-3">
                    {/* <WidgetArea widgetTitle="Friends Zone" listData={widgetData.friendsZone} /> */}
                    <WidgetArea widgetTitle="Courses" listData={coursesData} />
                </div>
            </div>
        </div>
    </div>

</main>

{/* Scroll to top start */}
<ScrollTop />
{/* Scroll to Top End */}

{/* <Footer /> */}
    </>
  )
}

export default Home
