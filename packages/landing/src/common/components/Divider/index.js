import colors from 'common/theme/agency/colors';
import React from 'react';

const Divider = ({color}) => {
    return (
        <div>
        <hr style={{
                    height:2,  
                    top: '50px',
                    right: '0',
                    width: '80%',
                    height:'4px',
                    backgroundColor:color || colors.primary
                  }}
        />
      </div>
    );
};

export default Divider;