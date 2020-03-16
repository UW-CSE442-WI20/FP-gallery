const React = require('react');

class CustomComponent extends React.Component {

  renderVimeo(url) {

    const vimeoId = url.replace('https://vimeo.com/', '');

    return (
      <div style={{
        padding: '56.25% 0 0 0',
        position: 'relative'
      }}>
        <iframe
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen={true}
          src={`https://player.vimeo.com/video/${vimeoId}?byline=0&portrait=0`}></iframe>
      </div>
    )
  }

  renderYoutube(url) {
    const youtubeId = url.replace('https://www.youtube.com/watch?v=', '');

    return (
      <iframe
        width="560"
        height="315"
        style={{
          display: 'block',
          margin: '0 auto',
          maxWidth: '100%'
        }}
        src={`https://www.youtube.com/embed/${youtubeId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}></iframe>
    )
  }

  renderVideo(url) {
    if (!url || url.trim() === '') {
      return <div />;
    }
    if (url.indexOf('vimeo') > -1) {
      return this.renderVimeo(url);
    }
    return this.renderYoutube(url);
  }

  render() {
    const { hasError, idyll, updateProps, data, ...props } = this.props;
    const { Group, Video, Github, Members } = data;

    return (
      <div className="project-container" {...props}>
        <h1>{Group}</h1>
        <div>{this.renderVideo(Video)}</div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
          {
            Github ? (<a className="button demo" href={Github}>
            Live Demo
          </a>) : null
          }
          {
            Video ? (<a className="button video" href={Video}>
            Video URL
          </a>) : null
          }

        </div>
      </div>
    );
  }
}

module.exports = CustomComponent;
