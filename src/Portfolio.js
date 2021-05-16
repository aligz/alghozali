import PropTypes from 'prop-types';

const Portfolio = ({job}) => {

    const color = job.dark ? 'text-white bg-black' : '';

    return (
        <div className={`p-8 ${color}`}>
            <h1 className="text-4xl font-bold">
                {job.link ?
                    <a href={job.link} target="_blank" rel="nofollow noreferrer noopener"
                       className="underline hover:text-blue-400">
                        {job.title}
                    </a> :
                    job.title
                }
            </h1>
            <h6 className="text-xl">{job.subtitle}</h6>
            <h6 className="text-xl text-blue-400">
                {job.client}
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