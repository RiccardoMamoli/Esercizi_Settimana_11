import React, { useEffect, useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

interface Article {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary?: string;
  published_at: Date;
  updated_at: Date;
  featured: boolean;
  launches: any[];
  events: any[];
}

const DetailsPage = () => {
  const [article, setSingleArticle] = useState<Partial<Article>>({});
  const { id } = useParams<{ id: string }>();

  const doFetch = () => {
    const url = `https://api.spaceflightnewsapi.net/v4/articles/${id}`;
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch');
        }
      })
      .then((a: Article) => {
        setSingleArticle(a);
      })
      .catch((err) => {
        console.error('Error:', err);
      });
  };

  useEffect(() => {
    doFetch();
  }, [id]);

  // Condizione per mostrare lo spinner mentre l'articolo è in fase di caricamento
  if (!article.title) {
    return <Spinner animation="grow" />;
  }

  return (
    <div className="d-flex justify-content-center w-100">
      <div className='custom-card-details d-flex justify-content-around w-75'>
        <div className='custom-image-details'>
          <img src={article.image_url} alt={article.title} />
        </div>
        <div className='article-body-details'>
          <div className='article-title'>{article.title}</div>
          <Card.Text>
            <p>{article.summary ? article.summary : 'No summary available'}</p>
          </Card.Text>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
