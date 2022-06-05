import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import Icon from '@material-tailwind/react/Icon';
import H4 from '@material-tailwind/react/Heading4';
import H6 from '@material-tailwind/react/Heading6';
import LeadText from '@material-tailwind/react/LeadText';
import Paragraph from '@material-tailwind/react/Paragraph';
import StatusCard from 'components/landing/StatusCard';
import Teamwork from 'assets/img/teamwork.jpeg';

export default function WorkingSection() {
    return (
        <section className="pb-20 bg-gray-100 -mt-32">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap relative z-50">
                    <StatusCard color="red" icon="stars" title="Awarded Agency">
                        Divide details about your product or agency work into
                        parts. A paragraph describing a feature will be enough.
                    </StatusCard>
                    <StatusCard
                        color="lightBlue"
                        icon="autorenew"
                        title="Free Revisions"
                    >
                        Keep you user engaged by providing meaningful
                        information. Remember that by this time, the user is
                        curious.
                    </StatusCard>
                    <StatusCard
                        color="teal"
                        icon="fingerprint"
                        title="Verified Company"
                    >
                        Write a few lines about each one. A paragraph describing
                        a feature will be enough. Keep you user engaged!
                    </StatusCard>
                </div>


            </div>
        </section>
    );
}
