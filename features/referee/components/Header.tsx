import React from 'react';

import { GameMode, MatchStatus, Referee } from '@/types';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from '../styles';

interface HeaderProps {
  timerDisplay: string;
  status: MatchStatus;
  statusText: string;
  currentGame: number;
  totalGames: number;
  leftGamesWon: number;
  rightGamesWon: number;
  gameMode: GameMode;
  referee: Referee;
  onBack: () => void;
  isLandscape?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  timerDisplay,
  status,
  statusText,
  currentGame,
  totalGames,
  leftGamesWon,
  rightGamesWon,
  gameMode,
  referee,
  onBack,
  isLandscape,
}) => {
  // Landscape Layout
  if (isLandscape) {
    return (
      <View style={[styles.header, styles.landscapeHeader]}>
        {/* Left Section */}
        <View style={styles.landscapeHeaderLeft}>
          <TouchableOpacity style={styles.btnBack} onPress={onBack}>
            <Text style={[styles.btnBackText, styles.landscapeBtnBackText]}>Quay lại</Text>
          </TouchableOpacity>
          <View style={[styles.matchTimerBox, styles.landscapeMatchTimerBox]}>
            <Text style={[styles.timerValue, styles.landscapeTimerValue]}>{timerDisplay}</Text>
          </View>
        </View>

        {/* Center Section - Timer & Status */}
        <View style={styles.landscapeHeaderCenter}>
          <View style={[styles.statusBadge, styles.landscapeStatusBadge]}>
            <View style={[styles.statusDot, status === 'playing' && styles.statusDotLive]} />
            <Text style={[styles.statusText, styles.landscapeStatusText]}>{statusText}</Text>
          </View>
          <View style={styles.gameScoreDisplay}>
            <Text style={[styles.gameScoreItem, styles.gameScoreItemLeft]}>{leftGamesWon}</Text>
            <Text style={styles.gameScoreSeparator}>-</Text>
            <Text style={[styles.gameScoreItem, styles.gameScoreItemRight]}>{rightGamesWon}</Text>
          </View>
          <Text style={[styles.gameBadge, styles.landscapeGameBadge]}>
            Game <Text style={styles.gameBadgeStrong}>{currentGame}</Text> / {totalGames}
          </Text>
        </View>

        <View style={styles.landscapeHeaderRight}>
          <View style={[styles.gameModeSwitch, styles.landscapeGameModeSwitch]}>
            {gameMode === 'singles' && (
              <View style={[styles.modeBtn, styles.modeBtnActive]}>
                <Text style={[styles.modeBtnText, styles.modeBtnTextActive]}>Đơn</Text>
              </View>
            )}
            {gameMode === 'doubles' && (
              <View style={[styles.modeBtn, styles.modeBtnActive]}>
                <Text style={[styles.modeBtnText, styles.modeBtnTextActive]}>Đôi</Text>
              </View>
            )}
          </View>
          <View style={[styles.refereeInfoHeader, styles.landscapeRefereeInfoHeader]}>
            <View style={styles.refereeDetails}>
              <Text style={[styles.refereeNameSm, styles.landscapeRefereeNameSm]}>{referee.name}</Text>
              <Text style={[styles.refereeRole, styles.landscapeRefereeRole]}>Trọng tài - {referee.level}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  // Portrait Layout
  return (
    <View style={styles.header}>
      {/* Left Section */}
      <View style={styles.headerLeft}>
        <TouchableOpacity style={styles.btnBack} onPress={onBack}>
          <Text style={styles.btnBackText}>Quay lại</Text>
        </TouchableOpacity>
        <View style={styles.logo}>
          <Text style={styles.logoText}>onePickleball</Text>
        </View>
      </View>

      {/* Center Section */}
      <View style={styles.headerCenter}>
        <View style={styles.matchTimerBox}>
          <Text style={styles.timerLabel}>Thời gian</Text>
          <Text style={styles.timerValue}>{timerDisplay}</Text>
        </View>
        <View style={styles.matchInfo}>
          <View style={styles.statusBadge}>
            <View style={[styles.statusDot, status === 'playing' && styles.statusDotLive]} />
            <Text style={styles.statusText}>{statusText}</Text>
          </View>
          <Text style={styles.gameBadge}>
            Game <Text style={styles.gameBadgeStrong}>{currentGame}</Text> / {totalGames}
          </Text>
          <View style={styles.gameScoreDisplay}>
            <Text style={[styles.gameScoreItem, styles.gameScoreItemLeft]}>{leftGamesWon}</Text>
            <Text style={styles.gameScoreSeparator}>-</Text>
            <Text style={[styles.gameScoreItem, styles.gameScoreItemRight]}>{rightGamesWon}</Text>
          </View>
        </View>
      </View>

      {/* Right Section */}
      <View style={styles.headerRight}>
        <View style={styles.gameModeSwitch}>
          {gameMode === 'singles' && (
            <View style={[styles.modeBtn, styles.modeBtnActive]}>
              <Text style={[styles.modeBtnText, styles.modeBtnTextActive]}>Đơn</Text>
            </View>
          )}
          {gameMode === 'doubles' && (
            <View style={[styles.modeBtn, styles.modeBtnActive]}>
              <Text style={[styles.modeBtnText, styles.modeBtnTextActive]}>Đôi</Text>
            </View>
          )}
        </View>
        <View style={styles.refereeInfoHeader}>
          <View style={styles.refereeDetails}>
            <Text style={styles.refereeNameSm}>{referee.name}</Text>
            <Text style={styles.refereeRole}>Trong tai - {referee.level}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
