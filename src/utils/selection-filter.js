export default function selectionFilter({ series, films } = []) {
  return {
    series: [
      { title: 'Trending Technologies', data: series?.filter((item) => item.genre === 'documentaries') },
      { title: 'Programming Languages', data: series?.filter((item) => item.genre === 'comedies') },
      { title: 'Web Development ', data: series?.filter((item) => item.genre === 'children') },
      
    ],
    films: [
      { title: 'Drama', data: films?.filter((item) => item.genre === 'drama') },
      { title: 'Thriller', data: films?.filter((item) => item.genre === 'thriller') },
      { title: 'Children', data: films?.filter((item) => item.genre === 'children') },
      
    ],
  };
}
