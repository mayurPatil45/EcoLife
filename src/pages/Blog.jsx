import Showcase from '../components/ShowCase';
import "../../public/css/global.css";
import "../../public/css/Blog.css";

const Blog = () => {
    return (
        <>
            <Showcase
                heading="EcoLife Blog"
                text="Blogs to read to live sustainably"
                showExtra={false}
            />
            <section className="page-content container">
                <div className="blog-grid" >
                    <div className="post">
                        <img src="" alt="" />
                        <a href="https://www.climaterealityproject.org/blog/community-groups-are-powering-climate-action">
                            <h2>Community Groups are Powering up for Climate Change</h2>
                        </a>
                        <p>With the recent passage of the Infrastructure Investment and Jobs Act (IIJA)...</p>
                    </div>
                    <div className="post">
                        <img src="" alt="" />
                        <a href="https://www.climaterealityproject.org/blog/forget-resolutions-here-are-some-realistic-ways-make-difference-climate-year">
                            <h2>Forget Resolutions, Here are some realistic ways to make a difference on climate change</h2>
                        </a>
                        <p>2022 was one heck of a year for our global climate...</p>
                    </div>
                    <div className="post">
                        <img src="" alt="" />
                        <a href="https://www.climaterealityproject.org/blog/why-should-you-care-about-climate-crisis">
                            <h2>Why should you care about Climate Change?</h2>
                        </a>
                        <p>We care about our loved ones, careers, material things, and living...</p>
                    </div>
                    <div className="post">
                        <img src="" alt="" />
                        <a href="">
                            <h2>Will Climate Change turn us into Junk Food?</h2>
                        </a>
                        <p>It goes without saying that nutrition is a vital part...</p>
                    </div>
                    <div className="post">
                        <img src="" alt="" />
                        <a href="">
                            <h2>Climate Change Explained in 10 Cartoons?</h2>
                        </a>
                        <p>If you have ever attempted to skim the latest 30-page scientific study...</p>
                    </div>
                    <div className="post">
                        <img src="" alt="" />
                        <a href="">
                            <h2>Change starts with me</h2>
                        </a>
                        <p>You know the climate crisis is happening...</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;
