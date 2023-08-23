import axios from "axios";
const baseURL='http://localhost:3001/';
class StudentPortalService
{
    validateStudent(username,password)
    {
        console.log("In studentportal service validatelogin");
        const querystring=`login/${username}/${password}`;
        console.log("querystring:"+querystring);
        return axios.get(baseURL+""+querystring);
    }
}
export default new StudentPortalService();