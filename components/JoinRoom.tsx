import React, { useState } from 'react';
import { Box, Button, TextInput } from 'grommet';

import ErrorDialog from './ErrorDialog';
import { MediaDeviceErrors } from './MediaPreview/helper';
import styles from '../styles/JoinRoom.module.css'
import { saveItem, USERNAME_KEY } from '../utils/storage';

interface Props {
  // roomId: string;
  // username: string;
  // updateRoomId?: React.Dispatch<React.SetStateAction<string | undefined>>;
  // updateUsername: React.Dispatch<React.SetStateAction<string>>;
  // updateTokens: React.Dispatch<
  //   React.SetStateAction<{ clientToken: string; refreshToken: string }>
  // >;
  // clientToken: string;
  // refreshToken: string;
  setReady: React.Dispatch<React.SetStateAction<boolean>>;
}

const JoinRoom = ({
  // roomId,
  // username,
  // updateRoomId,
  // updateUsername,
  // updateTokens,
  // clientToken,
  // refreshToken,
  setReady
}: Props) => {
  const [error, setError] = useState<
    { title: string; body: string } | undefined
  >(undefined);

  const checkAudioBrowserPermission = async () => {
    const result = await window?.navigator?.mediaDevices
      ?.getUserMedia({
        audio: true,
      })
      .then((stream) => {
        stream.getTracks().forEach(function (track) {
          track.stop();
        });
        return true;
      })
      .catch((error) => {
        if (error instanceof DOMException && error.name === 'NotAllowedError') {
          return false;
        }
      });

    return result;
  };

  // const joinRoom = async () => {
  //   if (clientToken && refreshToken) {
  //     updateTokens({
  //       clientToken,
  //       refreshToken,
  //     });

  //     return;
  //   }

  //   const response = await fetch('/api/client_token', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       room_id: roomId,
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });

  //   if (response.ok) {
  //     const data = await response.json();

  //     updateTokens({
  //       clientToken: data.token,
  //       refreshToken: data.refresh_token,
  //     });
  //   }
  // };

  return (
    <>
      {error && (
        <ErrorDialog onClose={() => setError(undefined)} error={error} />
      )}

      <Box
        pad='small'
        gap='medium'
        style={{
          justifySelf: 'center',
        }}
      >
        <Box
          background={{ color: 'white', opacity: 'weak' }}
          round='xsmall'
          pad='small'
        >
          Welcome!
        </Box>

        

        <TextInput
          data-testid='input-username'
          // value={username}
          // onChange={(e) => {
          //   updateUsername(e.target.value);
          // }}
          placeholder='Your name'
        />

        <Button
          className={styles.custom_btn}
          data-testid='btn-join-room'
          
          // disabled={!roomId || !username}
          label='Join room'
          onClick={async () => {
            //saveItem(USERNAME_KEY, username);
            const hasAudioPermission = await checkAudioBrowserPermission();
            if (hasAudioPermission) {
              //joinRoom();
              setReady(true);
            } else {
              setError(MediaDeviceErrors.mediaBlocked);
            }
          }}
        />
      </Box>
    </>
  );
};

export default JoinRoom;
