import { FC } from 'react';
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

interface Article {
    id: number;
    title: string;
    url: string;
    image_url: string;
    news_site: string;
    summary: string;
    published_at: Date;
    updated_at: Date;
    featured: boolean;
}

interface SingleArticleProps {
    article: Article
}
const SingleArticle: FC<SingleArticleProps> = ({ article }) => {
    return (
        <>
            <Link to={`/details/${article.id}`} className='text-decoration-none'>
                <div className='custom-card d-flex justify-content-between'>
                    <div className='custom-image'>
                        <img src={article.image_url} alt={article.title} />
                    </div>
                    <div className='article-body'>
                        <div className='article-title'>{article.title}</div>
                        <Card.Text>
                            <p> {article.summary.slice(0, 300)}</p>
                        </Card.Text>
                    </div>
                </div>
            </Link>

        </>
    )
}

export default SingleArticle;