import React from 'react'

import moment from 'moment';

const PostDetail = ({ post }) => {

    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;
    
        if (obj) {
          if (obj.bold) {
            modifiedText = (<b key={index}>{text}</b>);
          }
    
          if (obj.italic) {
            modifiedText = (<em key={index}>{text}</em>);
          }
    
          if (obj.underline) {
            modifiedText = (<u key={index}>{text}</u>);
          }
        }
    
        switch (type) {
          case 'paragraph':
              return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
          case 'heading-two':
            return <h2 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h2>;
          case 'heading-three':
            return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
          case 'heading-four':
            return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
          case 'image':
            return (
              <img
                key={index}
                alt={obj.title}
                height={obj.height}
                width={obj.width}
                src={obj.src}
              />
            );
          default:
            return modifiedText;
        }
    };

    return (
        <div className="bg-white p-4 m-4">
            <img src={post.featuredImage.url} alt="" />
            <h1 className="text-3xl">{post.title}</h1>
            <div className="author">
                <img src={post.author.picture.url} alt={post.author.name} height="30px" width="30px" />
                <p>{post.author.name}</p>
                <div className="date">{moment(post.createdAt).format('MMM DD, YYYY')}</div>
            </div>
            <div className="content">
                {post.content.raw.children.map((typeObj, index) => {
                    const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))
                    return getContentFragment(index, children, typeObj, typeObj.type);
                })}
            </div>
        </div>
    )
}

export default PostDetail
