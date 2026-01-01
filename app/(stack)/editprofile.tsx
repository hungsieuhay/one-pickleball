import React, { useEffect, useState } from 'react';

import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { styles } from '@/constants/styles/editprofile.styles';
import { useSession } from '@/contexts/AuthProvider';
import { useThemedColors } from '@/hooks/use-theme';
import { User } from '@/types';

export default function EditProfileScreen() {
  const [image, setImage] = useState<string | null>(null);
  const colors = useThemedColors();
  const { user: sessionUser, isLoading: isSessionLoading } = useSession();

  // Initialize state using sessionUser or a default empty structure
  // We use detailed state for form handling, but populating from sessionUser
  const [user, setUser] = useState<User | null>(sessionUser);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (sessionUser) {
      setUser(sessionUser);
      if (sessionUser.avatar) {
        setImage(sessionUser.avatar);
      }
    }
  }, [sessionUser]);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert('Permission required', 'Permission to access the media library is required.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSave = () => {
    if (!user) return;

    // Validation
    if (!user.name.trim()) {
      Alert.alert('Lỗi', 'Vui lòng nhập tên của bạn');
      return;
    }

    if (!user.email.trim()) {
      Alert.alert('Lỗi', 'Vui lòng nhập email');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
      Alert.alert('Lỗi', 'Email không hợp lệ');
      return;
    }

    setIsLoading(true);

    // Simulate API call for now as update endpoint is not yet defined in auth service/confirmed
    // In a real scenario, you would call authService.updateProfile(user) here
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert('Thành công', 'Thông tin cá nhân đã được cập nhật', [
        {
          text: 'OK',
          onPress: () => router.back(),
        },
      ]);
      console.log('Saving user data:', user);
    }, 1000);
  };

  const handleChangeAvatar = () => {
    Alert.alert('Thay đổi ảnh đại diện', 'Chọn nguồn ảnh', [
      { text: 'Hủy', style: 'cancel' },
      { text: 'Chụp ảnh', onPress: () => console.log('Camera') },
      { text: 'Chọn từ thư viện', onPress: () => pickImage() },
    ]);
  };

  const handleChangeCover = () => {
    Alert.alert('Thay đổi ảnh bìa', 'Chọn nguồn ảnh', [
      { text: 'Hủy', style: 'cancel' },
      { text: 'Chụp ảnh', onPress: () => console.log('Camera') },
      { text: 'Chọn từ thư viện', onPress: () => console.log('Gallery') },
    ]);
  };

  // Generic input handler to update user state
  const handleUserChange = (key: keyof User, value: string) => {
    if (user) {
      setUser((prev) => prev ? ({ ...prev, [key]: value }) : null);
    }
  };

  const renderInput = (
    label: string,
    value: string,
    onChangeText: (text: string) => void,
    placeholder: string,
    icon: string,
    keyboardType: 'default' | 'email-address' | 'phone-pad' | 'numeric' = 'default',
    editable: boolean = true
  ) => (
    <View style={styles.inputGroup}>
      <View style={styles.inputLabel}>
        <Ionicons name={icon as any} size={18} color={colors.icon} />
        <Text style={[styles.labelText, { color: colors.text }]}>{label}</Text>
      </View>
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: editable ? colors.backgroundTertiary : colors.backgroundSecondary,
            color: editable ? colors.text : colors.textTertiary,
            borderColor: colors.border,
          },
        ]}
        value={value ? String(value) : ''}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.textTertiary}
        keyboardType={keyboardType}
        editable={editable}
      />
    </View>
  );

  if (!user && isSessionLoading) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{ color: colors.text }}>Đang tải...</Text>
      </View>
    );
  }

  // Fallback if no user is found/not logged in, though protected routes usually prevent this
  if (!user) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{ color: colors.text }}>Không tìm thấy thông tin người dùng.</Text>
        <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 20 }}>
          <Text style={{ color: colors.tint }}>Quay lại</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: colors.background }]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={colors.icon} />
        </TouchableOpacity>
        <Text style={[styles.pageTitle, { color: colors.text }]}>Chỉnh sửa trang cá nhân</Text>
        <TouchableOpacity style={styles.backBtn} onPress={handleSave} disabled={isLoading}>
          <Text style={[styles.saveText, { color: isLoading ? colors.textTertiary : colors.tint }]}>
            {isLoading ? 'Đang lưu...' : 'Lưu'}
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Cover & Avatar Section */}
        <View style={styles.photoSection}>
          <TouchableOpacity
            style={[styles.coverPhoto, { backgroundColor: colors.backgroundTertiary }]}
            onPress={handleChangeCover}
          >
            <Ionicons name="camera" size={32} color={colors.textTertiary} />
            <Text style={[styles.photoText, { color: colors.textSecondary }]}>Thay đổi ảnh bìa</Text>
          </TouchableOpacity>

          <View style={styles.avatarContainer}>
            <TouchableOpacity style={[styles.avatar, { backgroundColor: colors.tint }]} onPress={handleChangeAvatar}>
              <Text style={styles.avatarText}>{user.name ? user.name.substring(0, 2).toUpperCase() : '??'}</Text>
              {image && <Image source={{ uri: image }} style={styles.avatarImage} />}
              <View style={styles.avatarOverlay}>
                <Ionicons name="camera" size={24} color="#fff" />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Form Section */}
        <View style={[styles.settingsSection, { marginTop: 60 }]}>
          <Text style={[styles.sectionTitle, { color: colors.textTertiary }]}>THÔNG TIN CƠ BẢN</Text>
          <View style={[styles.settingsMenu, { backgroundColor: colors.card }]}>
            {renderInput('Họ và tên', user.name, (text) => handleUserChange('name', text), 'Nhập họ và tên', 'person-outline')}
            {renderInput('Email', user.email, (text) => handleUserChange('email', text), 'Nhập email', 'mail-outline', 'email-address')}
            {renderInput('Số điện thoại', user.phone, (text) => handleUserChange('phone', text), 'Nhập số điện thoại', 'call-outline', 'phone-pad')}
          </View>
        </View>

        <View style={styles.settingsSection}>
          <Text style={[styles.sectionTitle, { color: colors.textTertiary }]}>PICKLEBALL</Text>
          <View style={[styles.settingsMenu, { backgroundColor: colors.card }]}>
            {/* OPR Level - Mapped to Skill Level, assuming edible or at least visible */}
            {renderInput('Trình độ (OPR)', user.opr_level, (text) => handleUserChange('opr_level', text), 'VD: 2.0', 'trophy-outline', 'numeric')}

            {/* ELO Rating - Read only example */}
            {renderInput('ELO Rating', user.elo_rating?.toString() || '0', () => { }, '', 'stats-chart-outline', 'numeric', false)}
            {renderInput('ELO Rank', user.elo_rank, () => { }, '', 'ribbon-outline', 'default', false)}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
