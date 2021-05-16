import PropTypes from 'prop-types';

const Portfolio = ({ job}) => {

    const color = job.dark ? 'text-white bg-black' : '';

    return (
        <div className={`p-8 ${color}`}>
            <h1 className="text-4xl font-bold">
                <a href={job.link} target="_blank" rel="nofollow noreferrer noopener" className="underline hover:text-blue-400">
                {job.title}
                </a>
            </h1>
            <h6 className="text-xl">{job.subtitle}</h6>
            <h6 className="text-xl text-gray-400">
                buat <span className="text-blue-400 font-bold">{job.client}</span>
            </h6>
            <p className="mt-4 font-description">
                Dikerjain taun {job.year} {job.until ? "sampe " + job.until : ''}.
            </p>
            <p className="mt-4 font-description">
                {job.description}
            </p>
            <p className="mt-4">
                {job.stack}
            </p>
        </div>
    )
}

Portfolio.defaultProps = {
    job: {
        link: '#',
        title: '',
        subtitle: '',
        client: '',
        year: '',
        until: '',
        description: '',
        stack: '',
        dark: false
    },
}

Portfolio.propTypes = {
    job: PropTypes.object.isRequired
}

export default Portfolio;