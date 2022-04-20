import '../CSS/agentComponent.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Agent(props) {
    return (
        <div className="AgentCard">
            <div className="Profile">
                <AccountCircleIcon aria-label='profile' className='Icon'/>
            </div>
            <div className='AgentInfo'>
                <h1 className='Name'>{props.name}</h1>
                <h2 className='Id'>{props.id}</h2>
                <h2 className='Role'>{props.role}</h2>
            </div>
        </div>
    );
  }