import { useEffect, useState } from "react"
import { Container, Row, Col, Spinner } from "react-bootstrap"
import SingleArticle from "./SingleArticle";

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



const Home = () => {

    const [articles, setArticles] = useState<Article[]>([])
    const doFetch = () => {
        const url = 'https://api.spaceflightnewsapi.net/v4/articles'
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('non ci siamo')
                }
            })
            .then((arrayOfArticles) => {
                setArticles(arrayOfArticles.results)
            })
            .catch((err) => {
                console.log('no', err)
            })
    }

    useEffect(() => {
        doFetch()
    }, [])


    if (!articles) {
        return <Spinner animation="grow" />;
      }


    return (
        <>
            <Container fluid className="d-flex justify-content-center">
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <div className="text-center">
                            <h4> Latest articles</h4>
                        </div>
                        <div>
                            <Container className="custom-article-list">
                                <Row>
                                    {
                                        articles.map((article) => (
                                            <Col key={article.id} className="mb-4">
                                                <SingleArticle article={article} />
                                            </Col>
                                        ))
                                    }
                                </Row>
                            </Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default Home