import { Bookmark } from 'lucide-react';

const card = (props) => {
    return (
        <>
            <div className="card">
                <div className="card-bg"></div>
                <div className='card-top'>
                    <div className='top-left'>
                        <div className="icon">
                            <img src={props.companyLogo} alt="" />
                        </div>
                    </div>
                    <div className='top-right'>
                        <a href="#" className="save-btn">
                            <p>Save</p>
                            <Bookmark />
                        </a>
                    </div>
                </div>
                <div className="card-center">
                    <div className="center-top">
                        <h2 className="company-name">{props.companyName}</h2>
                        <p className="deadline">{props.postedDaysAgo} days ago</p>
                    </div>
                    <div className="center-bottom">
                        <h1 className="role">{props.position}</h1>
                        <div className="tags">
                            <div className="tag">{props.tags.type}</div>
                            <div className="tag">{props.tags.level}</div>
                        </div>
                    </div>
                </div>
                <div className="card-bottom">
                    <div className="bottom-left">
                        <h2 className="pay">${props.pricePerHour}/hr</h2>
                        <p className="city">{props.city}, India</p>
                    </div>
                    <div className="bottom-right">
                        <a href="#" className="apply-btn">Apply Now</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default card