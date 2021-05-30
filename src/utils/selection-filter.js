export default function selectionFilter({ series, films } = []) {
  return {
    series: [
      { title: 'Trending Technologies', data: series?.filter((item) => item.genre === 'trending') },
      { title: 'Programming Languages', data: series?.filter((item) => item.genre === 'programming') },
      { title: 'Web Development ', data: series?.filter((item) => item.genre === 'webd') },
      
    ],
    films: [
      { title: 'Course Material', data: films?.filter((item) => item.genre === 'course') },
      { title: 'Database', data: films?.filter((item) => item.genre === 'database') },
      { title: 'Mobile Development', data: films?.filter((item) => item.genre === 'mobiled') },
      
    ],
  };
}
