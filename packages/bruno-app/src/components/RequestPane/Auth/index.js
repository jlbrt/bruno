import React from 'react';
import get from 'lodash/get';
import AuthMode from './AuthMode';
import AwsV4Auth from './AwsV4Auth';
import BearerAuth from './BearerAuth';
import BasicAuth from './BasicAuth';
import DigestAuth from './DigestAuth';
import StyledWrapper from './StyledWrapper';

const Auth = ({ item, collection }) => {
  const authMode = item.draft ? get(item, 'draft.request.auth.mode') : get(item, 'request.auth.mode');

  const getAuthView = () => {
    switch (authMode) {
      case 'awsv4': {
        return <AwsV4Auth collection={collection} item={item} />;
      }
      case 'basic': {
        return <BasicAuth collection={collection} item={item} />;
      }
      case 'bearer': {
        return <BearerAuth collection={collection} item={item} />;
      }
      case 'digest': {
        return <DigestAuth collection={collection} item={item} />;
      }
    }
  };

  const showOverrideWarning =
    get(item, 'draft.request.auth.mode') !== 'none' && get(collection, 'root.request.auth.mode') !== 'none';

  return (
    <StyledWrapper className="w-full mt-1">
      <div className="flex flex-grow justify-start items-center">
        <AuthMode item={item} collection={collection} />
      </div>

      {showOverrideWarning && (
        <p className="warning-text">Overrides the Auth setting of your collection for this request</p>
      )}

      {getAuthView()}
    </StyledWrapper>
  );
};
export default Auth;
