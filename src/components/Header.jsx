import React from 'react';
import { Link } from "react-router-dom";
import Meta from "./Meta";

const Header = ({ pageTitle, breadcrum, children, breadcrumbs }) => {
  return (
    <article className="mb-4">
      <div className="row content">
        <Meta title={pageTitle} />
        {!breadcrum && (
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              {breadcrumbs.map((item, index) => {
                return (
                  <li
                    key={`ky=${item.title}`}
                    className={`breadcrumb-item ${
                      index === breadcrumbs.length - 1
                    }`}
                  >
                    {index === breadcrumbs.length - 1 ? (
                      <>{item.title}</>
                    ) : (
                      <Link
                        to={item.url}
                        className="text-decoration-none app-breadcrums-link"
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}
        {children}
      </div>
    </article>
  );
};

export default Header;
