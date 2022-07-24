import type { NextPage } from 'next'
import Head from 'next/head'
import MediaPreview from '../../components/MediaPreview'
import styled from 'styled-components';
import { Fragment, useEffect, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import PropTypes from 'prop-types';
import { Grid, Main } from 'grommet';
import { useRouter } from 'next/router';

import { TelnyxRoom } from '../../hooks/room';
import { TelnyxMeetContext } from '../../context/TelnyxMeetContext';
import JoinRoom from '../../components/JoinRoom';
import { v4 as generatedId } from 'uuid';
import { API_KEY } from '../_app';
import Room from '../../components/Room';

const breakpointMedium = 1000;

const generateId = (): number => Math.ceil(Math.random() * 1000000);

const GridPreviewContainer = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 1fr;
  align-items: center;

  @media (min-width: ${breakpointMedium}px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Dview = styled.div`
  position: absolute; height: 100vh; width: 100vw;
`

function getUserName(): string {
  //let user = getItem(USERNAME_KEY);
  let user = undefined;
  if (user) {
    return user;
  } else {
    return "yuheng Ding";
  }
}

const Join: NextPage = () => {
  const router = useRouter();
  console.log(router.query.room_id);
  const room_id = router.query.room_id;
  // const [roomId, setRoomId] = useState<string>();
  const [username, setUsername] = useState<string>('');
  const [tokens, setTokens] = useState<{
    clientToken: string;
    refreshToken: string;
  }>({
    clientToken: '',
    refreshToken: '',
  });
  const [isReady, setIsReady] = useState(false);

  const [audioInputDeviceId, setAudioInputDeviceId] = useState<
    string | undefined
  >();
  const [audioOutputDeviceId, setAudioOutputDeviceId] = useState<
    string | undefined
  >();
  const [videoInputDeviceId, setVideoInputDeviceId] = useState<
    string | undefined
  >();

  const unreadMessages = useRef<TelnyxRoom['messages'] | null>(null);

  const getUserTokens = async () => {
    console.log(room_id);
    if (typeof room_id === "undefined") {
      return;
    }
    const requestId = generatedId();
    fetch(
      `https://api.telnyx.com/v2/rooms/${room_id}/actions/generate_join_client_token`,
      {
        method: 'POST',
        body: JSON.stringify({
          refresh_token_ttl_secs: 3600,
          token_ttl_secs: 60,
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data)
      setTokens({
        clientToken: data.data.token,
        refreshToken: data.data.refresh_token,
      });
      console.log("User token: " + data.data.token);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  
  useEffect(() => {
    getUserTokens();
  }, [room_id]);

  const [isAudioTrackEnabled, setIsAudioTrackEnabled] =
    useState<boolean>(false);
  const [isVideoTrackEnabled, setIsVideoTrackEnabled] =
    useState<boolean>(false);
  const sendNotification = (message: { body: string }) => {
    toast(message.body, {
      duration: 6000,
      style: {
        minWidth: '420px',
        background: '#000',
        color: '#dadada',
      },
    });
  };
  // const [networkMetrics, setNetworkMetrics] = useState<NetworkMetrics>();

  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);

  useEffect(() => {
    setUsername(getUserName());
  }, []);

  // useEffect(() => {
  //   setRoomId(id);
  // }, [id]);

  // useEffect(() => {
  //   if (roomId && username && tokens.clientToken && tokens.refreshToken) {
  //     setIsReady(true);
  //   } else {
  //     setIsReady(false);
  //   }
  // }, [roomId, username, tokens]);
  // setIsReady(false);

  const onDisconnected = () => {
    setTokens({ clientToken: '', refreshToken: '' });
  };

  return (
    <Fragment>
      <Head>
        <title>Join Room</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Dview>
      <Main align='center' justify='center' background='light-2'>
        <Toaster />

        <TelnyxMeetContext.Provider
          value={{
            audioInputDeviceId,
            audioOutputDeviceId,
            videoInputDeviceId,
            setAudioInputDeviceId,
            setAudioOutputDeviceId,
            setVideoInputDeviceId,
            isAudioTrackEnabled,
            isVideoTrackEnabled,
            setIsAudioTrackEnabled,
            setIsVideoTrackEnabled,
            sendNotification,
            // networkMetrics,
            // setNetworkMetrics,
            // unreadMessages,
            // optionalFeatures,
            isVideoPlaying,
            setIsVideoPlaying,
          }}
        >
          {isReady ? (
            <Room 
              roomId={room_id as string}
              tokens={tokens}
              context={{
                id: generateId(),
                username,
              }}
              onDisconnected={onDisconnected}
            />
          ) : 
          <GridPreviewContainer>
            <MediaPreview />
            <JoinRoom 
              setReady={setIsReady}
            />
          </GridPreviewContainer>
          }
          
          {/* {roomId && isReady ? (
            <Room
              roomId={roomId}
              tokens={tokens}
              context={{
                id: generateId(),
                username,
              }}
              onDisconnected={onDisconnected}
            />
          ) : (
            <GridPreviewContainer>
              <MediaPreview />
              <JoinRoom
                roomId={roomId || ''}
                username={username}
                updateUsername={setUsername}
                updateRoomId={setRoomId}
                updateTokens={setTokens}
                clientToken={clientToken}
                refreshToken={refreshToken}
              />
            </GridPreviewContainer>
          )} */}
        </TelnyxMeetContext.Provider>
      </Main>
      </Dview>

    </Fragment>
  )
}

export default Join
