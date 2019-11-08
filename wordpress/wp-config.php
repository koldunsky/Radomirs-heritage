<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', '4Gamer-wordpress');

/** MySQL database username */
define('DB_USER', '4Gamer-Testbench');

/** MySQL database password */
define('DB_PASSWORD', '123456');

/** MySQL hostname */
define('DB_HOST', '127.0.0.1');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'L;gs^~ovH7}GXz)3b^RQ>;P:~Wt1mo1]m|q1/Ke6XL#-%umuT}Z5zJH~x0Bj>&)?');
define('SECURE_AUTH_KEY',  '-SHJfVvi*nU^K{q0cU&dQY(VLOvK}U0?~HeZ>#uz#ZOQ6Pj%i<spY8+)L{LNjhSL');
define('LOGGED_IN_KEY',    ' YD]{}nK>Rk6eHvfH[tN -V_vO#v`qP<~/b]{,NI([?Ey_x</`*4.e}*~[ ,LjL!');
define('NONCE_KEY',        'XXlg-q%.g$8dxndoGYw,x!mB<m0R0L)S+2[M|`,S,n:8d[^NG=<n6?K[xF+=T1Jk');
define('AUTH_SALT',        'sZmw@fTEL(a Q)c}?hJ]|k,6[/7SDTX)Cnq*+[<M&Q#$&,*y#v/rvwsdmCj+n(`n');
define('SECURE_AUTH_SALT', '`ndT3n(JJ1}2I0yU9$Xb,f(z~;M%o2ZmK]}s$:4f9+/}11%4D2lOsRf.Fbz%XfJ3');
define('LOGGED_IN_SALT',   'tMp/[Y}2 9g}&*fB?HLDBQ78(yf[RT=>GI-Q2f@v/^ac8QHWKagH$2%aS#`C~v0W');
define('NONCE_SALT',       '32or_=AdOR%fkZ u{j-[Bz2,k.+R@8uxa<*</y20_Gt!fyvhUwx$jK,x]?rrFTz7');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_4gamer_test_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
