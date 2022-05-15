import H5 from '@material-tailwind/react/Heading5';
import LeadText from '@material-tailwind/react/LeadText';
import Icon from '@material-tailwind/react/Icon';

export default function DefaultFooter() {
    return (
        <>
            <footer className="relative bg-gray-100 pt-8 pb-6">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="flex flex-wrap text-center lg:text-left pt-6">
                        <div className="w-full lg:w-6/12 px-4">
                            <H5 color="gray">Title</H5>
                            <div className="-mt-4">
                                <LeadText color="blueGray">
                                    ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                </LeadText>
                            </div>
                            <div className="flex gap-2 mt-6 md:justify-start md:mb-0 mb-8 justify-center">
                                <a
                                    href="https://www.linkedin.com/in/abdelrahman-m-5a625920a/"
                                    className="grid place-items-center bg-white text-blue-600 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-linkedin"
                                    />
                                </a>

 
                                <a
                                    href="https://github.com/Am0stafa"
                                    className="grid place-items-center bg-white text-gray-900 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-github"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top">
                                <div className="w-full lg:w-4/12 px-4 ml-auto md:mb-0 mb-8">
                                    <span className="block uppercase text-gray-900 text-sm font-serif font-medium mb-2">
                                        Have a product ?
                                    </span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a
                                                href="https://www.creative-tim.com/presentation?ref=mtk"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                                            >
                                                Upload your producs
                                            </a>
                                        </li>

                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-300" />

                </div>
            </footer>
        </>
    );
}
