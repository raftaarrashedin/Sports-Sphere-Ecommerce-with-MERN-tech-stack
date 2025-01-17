import Layout from "../../components/Layout/Layout"
import UserMenu from "../../components/Layout/UserMenu";

const Profile = ()=>{
    return(
        <Layout title={"User Profile"}>
        <div className="container-fluid m-3 p-3">
          <div className="row">
            <div className="col-3">
              <UserMenu />
            </div>
            <div className="col-9">
              <h1>Your Profile</h1>
            </div>
          </div>
        </div>
        </Layout>
    )
}

export default Profile;